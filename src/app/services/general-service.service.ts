import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  dataUser = {
    isNew: false,
    username: '',
    password: ''
  }

  dataLogin = {
    isLogin: false
  }

  dataListAlarms = {
    isLogin: true
  }

  dataAlarm = {}

  listPatients: any = []

  listFrecuencies: any = []

  constructor() {
    this.listPatients.push({
      value: "Maria Lara",
      option: "Maria Lara",
      illenes: "Enfermedad cardiaca"
    },
    {
      value: "Natalie Santiago",
      option: "Natalie Santiago",
      illenes: "Enfermedad cardiaca"
    },
    {
      value: "Plinio Grijalba",
      option: "Plinio Grijalba",
      illenes: "Enfermedad cardiaca"
    },
    {
      value: "Juan Perez",
      option: "Juan Perez",
      illenes: "Enfermedad cardiaca"
    })

    this.listFrecuencies.push(
      { value: "Cada día", option: "Cada día" },
      { value: "Dias especificos", option: "Dias especificos" },
      { value: "Intervalo de dias", option: "Intervalo de dias" },
    )
  }

  setDataUser(data: any) {
    this.dataUser = data;
  }

  getDataUser() {
    return this.dataUser;
  }

  setDataLogin(data: any) {
    this.dataLogin = data;
  }

  getDataLogin() {
    return this.dataLogin;
  }

  setDataAlarm(data: any) {
    this.dataAlarm = data;
  }

  getDataAlarm() {
    return this.dataAlarm;
  }

  setListPatients(data: any) {
    this.listPatients = data;
  }

  getListPatients() {
    return this.listPatients;
  }

  setListFrecuencies(data: any) {
    this.listFrecuencies = data;
  }

  getListFrecuencies() {
    return this.listFrecuencies;
  }
}
