import { Injectable } from '@angular/core';
import { DialogLayoutDisplay, ToastNotificationInitializer, ToastPositionEnum } from '@costlydeveloper/ngx-awesome-popup';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  successToast(title : string, msg : string){
    const toast = new ToastNotificationInitializer()
    toast.setTitle(title)
    toast.setMessage(msg)
    toast.setConfig({
      LayoutType: DialogLayoutDisplay.SUCCESS,
      ToastPosition: ToastPositionEnum.TOP_CENTER
    })
    toast.openToastNotification$()
  }

  errorToast(title : string, msg : string){
    const toast = new ToastNotificationInitializer()
    toast.setTitle(title)
    toast.setMessage(msg)
    toast.setConfig({
      LayoutType: DialogLayoutDisplay.DANGER,
      ToastPosition: ToastPositionEnum.TOP_CENTER
    })
    toast.openToastNotification$()
  }
  infoToast(title : string, msg : string){
    const toast = new ToastNotificationInitializer()
    toast.setTitle(title)
    toast.setMessage(msg)
    toast.setConfig({
      LayoutType: DialogLayoutDisplay.INFO,
      ToastPosition: ToastPositionEnum.TOP_CENTER
    })
    toast.openToastNotification$()
  }

}
