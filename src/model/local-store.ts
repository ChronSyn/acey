import Config from '../config'
import Errors from '../errors'
import Model from './'
import Manager from '../manager'

export default class LocalStoreManager {
    private _m: Model
    constructor(m: Model){
        this._m = m
    }

    private _model = (): Model => this._m
    public isActive = (): boolean => Manager.isInitialized() && !Config.isNextJSServer() && !this._model().is().keyGenerated() && this._model().is().connected() && Manager.localStoreManager() != null

    public get = async () => {
        if (this.isActive()){
            const key = this._model().super().option().key()
            const data = await Manager.localStoreManager().getElement(key)
            if (data){
                return Model.ParseStoredJSON(data)
            }
        }
        return undefined
    }
    
    public pull = () => {
        this._throwErrorIfInactive()
        const data = this.get()
        data && this._model().hydrate(data).save()
    }

    public set = (expires = 365) => {
        this._throwErrorIfInactive()
        const key = this._model().super().option().key()
        try {
            Manager.localStoreManager().addElement(key, this._model().to().locallyStorableString(), expires)
        } catch (e) {
            console.log(`error from localStore set with ${this._model().is().collection() ? 'Collection' : 'Model'}: ${key}, ${e}`)
        }
        return this._model().action()
    }
    
    public remove = () => {
        this._throwErrorIfInactive()
        const key = this._model().super().option().key()
        try {
            Manager.localStoreManager().removeElement(key)
        } catch (e){
            console.log(`error from localStore remove with ${this._model().is().collection() ? 'Collection' : 'Model'}: ${key}, ${e}`)
        }
    }

    private _throwErrorIfInactive = () => {
        if (!this.isActive()){
            throw Errors.unauthorizedLocalStore(this._model())
        }
    }
}