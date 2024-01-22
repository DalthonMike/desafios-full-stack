import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPagamentoComponent } from './lista-pagamento.component';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe('ListaPagamentoComponent', () => {
  let component: ListaPagamentoComponent;
  let fixture: ComponentFixture<ListaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPagamentoComponent ],
      providers: [DialogService, BolsistaService],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});