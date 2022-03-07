import { BehaviorSubject } from 'rxjs'

export const isConnected$ = new BehaviorSubject()

 const connectHandler = () => {
     isConnected$.next()
 }