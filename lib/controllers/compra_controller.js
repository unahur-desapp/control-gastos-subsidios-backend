import Compras from '../models/compras';
import Proyecto from '../models/proyecto';

export const getCompraByProyectId = async (req, res) => {
  const idProyecto = req.params.idProyecto;
  const compras = await Compras.findAll({
    include: [{ model: Proyecto }],
  });
  const comprasById = compras.filter(
    (compra) => compra.idProyecto == idProyecto
  );
  res.json(comprasById);
};

export const getCompraById = async (req, res) => {
  const id = req.params.idCompra;
  const compras = await Compras.findAll({});
  const comprasById = compras.filter((compra) => compra.id == id);
  res.json(comprasById);
};
export const getCompraByIdConProyecto = async (req, res) => {
  const id = req.body.id;
  const compras = await Compras.findAll({
    include: [{ model: Proyecto }],
  });
  const comprasById = compras.filter((compra) => compra.id == id);
  res.json(comprasById);
};

export const getAllCompras = async (req, res) => {
  const compras = await Compras.findAll({});
  res.json(compras.map((compra) => compra.toJSON()));
};

export const getAllComprasConProyecto = async (req, res) => {
  const compras = await Compras.findAll({
    include: [{ model: Proyecto }],
  });
  res.json(compras.map((compra) => compra.toJSON()));
};

export const postCompra = (req, res) => {
  //INSERT ROW

  Compras.create({
    fecha: req.body.fecha,
    rubro: req.body.rubro,
    subrubro: req.body.subrubro,
    numeroCompra: req.body.numeroCompra,
    proveedor: req.body.proveedor,
    monto: req.body.monto,
    estado: req.body.estado,
    factura: req.body.factura,
    nombre: req.body.nombre,
    idProyecto: req.body.idProyecto,
  })
    .then((compra) => res.status(201).send({ nombre: compra.nombre }))
    .catch((error) => {
      if (error.message) {
        res.status(404).send('Bad request');
      } else {
        res.status(500).send({
          message: 'Serivice error',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};

export const getTotal = async (req, res) => {
  const gastosTotales = await Compras.sum('monto');
  res.json({ totalGastos: gastosTotales });
};

export const findByRubro = async (req, res) => {
  const compras = await Compras.findAll();
  const comprasByProyecto = compras.filter(
    (compra) => compra.idProyecto == req.query.idProyecto
  );
  const filterComprasByRubro = comprasByProyecto.filter(
    (compra) => compra.rubro.toLowerCase() === req.query.rubro.toLowerCase()
  );
  let total = 0;
  filterComprasByRubro.map((compra) => (total += parseInt(compra.monto)));
  res.json({ rubro: req.query.rubro, totalGastado: total });
};

export const putCompra = async (req, res) => {
  const id = req.params.id;
  const findCompra = await Compras.findOne({
    where: { id },
  });
  findCompra
    .update({
      estado: req.body.estado,
    })
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.log(`Error al intentar actualizar la base de datos: ${error}`);
      res.sendStatus(500);
    });
};

export const getCompraTotal = async (req, res) => {
  const id = req.params.id;
  const compras = await Compras.findAll({
    include: [{ model: Proyecto }],
  });
  const comprasById = compras.filter((compra) => compra.id == id);
  let resultado = new Map();

  comprasById.forEach((compra) => {
    if (resultado.has(compra.rubro)) {
      resultado.set(
        compra.rubro,
        parseFloat(resultado.get(compra.rubro)) + parseFloat(compra.monto)
      );
    } else {
      resultado.set(compra.rubro, parseFloat(compra.monto));
    }
  });

  res.json(Object.fromEntries(resultado));
};
