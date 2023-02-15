const { response } = require('express');
const Plan   = require('../models/Plan');
const Usuario = require('../models/Usuario');

const createPlan = (req, res = response) => {
    const plan = new Plan({
      title:   req.body.title,
      desc:   req.body.desc,
      date:   req.body.date,
      time:   req.body.time,
      img:    req.body.img
    });
    // Save infocar in the database
    plan.save((err,plan) => {
      if (err) {
          res.status(500).send({ message: err });
          return;
      }
      if (req.body.usuario) {
          Usuario.find(
            {
              name: { $in: req.body.usuario }
            },
            (err, usuario) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
    
              plan.usuario = usuario.map(usuario => usuario._id);
              plan.save(err => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
    
                res.send({ message: "El msgChat se creo con éxito!" });
              });
            }
          );
      } else {
          Usuario.findOne((err, usuario) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            plan.usuario = [usuario._id];
            plan.save(err => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
    
              //res.send({ message: "El msgChat se creo con éxito!" });
              res.json({
                  message: "El msgChat se creo con éxito!",
                  plan
              });
            });
          });
      }
  });
};

const findAll = async(req, res = response ) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  const plans = await Plan.find(condition)
                            .populate('usuario', 'name')
                            .exec();


    res.json({
        ok: true,
        plans
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
