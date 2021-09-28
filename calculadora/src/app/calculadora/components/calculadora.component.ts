import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(num: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNum(this.numero1, num);
    } else {
      this.numero2 = this.concatenarNum(this.numero2, num);
    }
  }


  concatenarNum(numAtual: string, numConcatenar: string): string {
    // caso contenha 0 ou nulo, o valor é reiniciado
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    // caso o 1° digito seja . o 0 vai para antes do ponto
    if (numConcatenar === '.' && numAtual === '') {
      return '0.'
    }
    // caso digite o . duas vezes retorna o numero atual
    if (numConcatenar === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcatenar;
  }

  definirOperacao(operacao: string): void {
    // apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }


  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}
