'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Compras', [
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 1,
        idProveedor: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 2,
        idProveedor: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 3,
        idProveedor: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 4,
        idProveedor: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 5,
        idProveedor: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 6,
        idProveedor: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 1,
        idProveedor: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 23,
        estado: 'En venta',
        factura: '1',
        nombre: 'PC',
        idSubsidio: 2,
        idProveedor: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Compras', null, {});
  },
};
