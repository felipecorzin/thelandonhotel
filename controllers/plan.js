const { response } = require('express');
const Plan   = require('../models/Plan');
const Usuario = require('../models/Usuario');

const createPlan = (req, res = response) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    const plan = new Plan({
      name:   req.body.name,
      nombre: req.body.nombre,
      fecha: req.body.fecha,
      hora: req.body.hora,
      img:  req.body.img
    });
    // Save infocar in the database
    Plan.create( plan ).then(() => {
      res.json({
          ok: true,
          plan
      });
    }).catch( err => {
        res.json({
            ok: false,
            err
        });
    });
};

const findAll = async(req, res = response ) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};
  Plan.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};

const findOne = async(req, res = response ) => {
  const id = req.params.id;

  Plan.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Tutorial with id " + id });
    else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Tutorial with id=" + id });
  });
};

const deletePlan = async(req, res = response ) => {
  const id = req.params.id;
  Plan.findByIdAndRemove(id, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    } else {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  });

};

const deleteAll = async(req, res = response ) => {
  Plan.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

module.exports = {
    createPlan,
    findAll,
    findOne,
    deletePlan,
    deleteAll
}
