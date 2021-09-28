/**
 * 
 Serviço responsável por executar as operações 
 da Calculadora (Somar, subtrair, multiplicar e dividir) 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /*constantes no TS são definidas 
  pela identificacao readonly
  Uma boa regra é criar constantes
  em uppercase
  O static é para acessar os atributos 
  através da classe
  */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
