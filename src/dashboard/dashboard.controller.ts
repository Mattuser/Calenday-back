import { Controller, Get, Response } from '@nestjs/common';
import { response } from 'express';
import { Employee } from 'src/employees/entities/employee.entity';
import { Public } from 'src/utils/constants';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}
  @Public()
  @Get('/bestemployees')
  async BestEmployees(@Response() response) {
    const employees = await this.dashboardService.findTopThreeEmployee();

    return response.status(200).json(employees);
  }
  @Public()
  @Get('/productsale')
  async findProductSale(@Response() response) {
    const productSale = await this.dashboardService.findProductSale();
    return response.status(200).json(productSale);
  }

  @Public()
  @Get('/gatemoney')
  async findGateMoney(@Response() response) {
    const gateMoney = await this.dashboardService.findGateMoney();
    return response.status(200).json(gateMoney);
  }

  @Public()
  @Get('/saidas')
  async findSaidas(@Response() response) {
    const saidas = await this.dashboardService.findSaidas();
    return response.status(200).json(saidas);
  }

  @Public()
  @Get('/servicesperformed')
  async findServicesPerformed(@Response() response) {
    const servicesPerformed = await this.dashboardService.findSaidas();
    return response.status(200).json(servicesPerformed);
  }

  @Public()
  @Get('/avarageticket')
  async findAverageTicket(@Response() response) {
    const avarageTicket = await this.dashboardService.findAverageTicket();
    return response.status(200).json(avarageTicket);
  }

  @Public()
  @Get('/produtos')
  async findRegisteredProducts(@Response() response) {
    const registeredProducts =
      await this.dashboardService.findRegisteredProducts();
    return response.status(200).json(registeredProducts);
  }

  @Public()
  @Get('/stockitens')
  async findStockItens(@Response() response) {
    const stockItens = await this.dashboardService.findStockItens();
    return response.status(200).json(stockItens);
  }

  @Public()
  @Get('/soldproducts')
  async findSoldProducts(@Response() response) {
    const soldProducts = await this.dashboardService.findSoldProducts();
    return response.status(200).json(soldProducts);
  }
  @Public()
  @Get('/appointments')
  async findAppointmentsPerDay(@Response() response) {
    const appointmentsPerDaydProducts =
      await this.dashboardService.findAppointmentsPerDay();
    return response.status(200).json(appointmentsPerDaydProducts);
  }
}
