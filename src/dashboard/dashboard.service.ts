import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  async findTopThreeEmployee() {
    return await [
      {
        employeeName: 'Monica Soares',
        occupation: 'Manicure',
        calls: '172 atendimentos realizados',
      },
      {
        employeeName: 'Leila Ferreira',
        occupation: 'Cabeleleira',
        calls: '118 atendimentos realizados',
      },
      {
        employeeName: 'Monica Soares',
        occupation: 'Manicure',
        calls: '64 atendimentos realizados',
      },
    ];
  }

  async findProductSale() {
    return await {
      mes: 'Agosto',
      ano: '2022',
      totalVendas: '16.250,64',
    };
  }

  async findGateMoney() {
    return await {
      entradas: '57.250',
    };
  }
  async findSaidas() {
    return await {
      saidas: '25.356',
    };
  }
  async findServicesPerformed() {
    return await {
      manicure: '120.00',
      corteFeminino: '',
      coloracao: '',
      luzes: '',
      hidratacao: '',
      escova: '',
      corteMasculino: '',
    };
  }
  async findAverageTicket() {
    return await {
      avarageTicket: '120.00',
    };
  }

  async findRegisteredProducts() {
    return await {
      produtosRegistrados: '80',
    };
  }
  async findStockItens() {
    return await {
      itensEmEstoque: '600',
    };
  }
  async findSoldProducts() {
    return await {
      produtosVendidos: '600',
    };
  }
  async findAppointmentsPerDay() {
    return await {
      agendamentosPorDia: '50%',
    };
  }
}
