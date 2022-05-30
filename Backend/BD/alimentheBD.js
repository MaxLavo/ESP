import sqlite3 from "sqlite3";
const SQlite3 = sqlite3.verbose();
const db = new SQlite3.Database("./BD/AliMenthe.db");

const query = (command, method = "all") => {
  return new Promise((resolve, reject) => {
    db[method](command, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
const connect = () => {
  //   db.serialize(async () => {
  //    console.log(ok)
  //   })
  const db = new SQlite3.Database("./BD/AliMenthe.db");
};

const addJardin = (nom, adresse) => {
  connect();
  db.serialize(async () => {
    const damn = await query(
      "INSERT INTO Jardins (nom, adresse) VALUES ('" +
        nom +
        "' , '" +
        adresse +
        "')"
    );
    console.log("ok");
  });
};
//PARTIE DES ADDS
const addLot = (nom, capacite, idJardin) => {
  db.serialize(async () => {
    const ohmy = await query(
      "INSERT INTO Lots (nom,capacite,idJardin) VALUES ('" +
        nom +
        "' , '" +
        capacite +
        "' , '" +
        idJardin +
        "')"
    );
  });
};

const addMembres = (prenom, nom, motDePasse, adresse) => {
  db.serialize(async () => {
    const god = await query(
      "INSERT INTO  Membres (prenom, nom, motDePasse, adresse) VALUES ('" +
        prenom +
        "' , '" +
        nom +
        "' , '" +
        motDePasse +
        "' , '" +
        adresse +
        "')"
    );
  });
};
const promuteAdmin = (idMembre, idJardin) => {
  db.serialize(async () => {
    const qAdmin = await query(
      "INSERT INTO Admins (idMembre, idJardin) VALUES ('" +
        idMembre +
        "' , '" +
        idJardin +
        "')"
    );
  });
};

const askForLot = (idMembre, idLot) => {
  db.serialize(async () => {
    const qAttMembre = await query(
      "INSERT INTO membresEnAttenteLot (idMembre, idLot) VALUES ('" +
        idMembre +
        "' , '" +
        idLot +
        "') "
    );
  });
};

const addToLot = (idMembre, idLot, idMembresAttenteLot) => {
  db.serialize(async () => {
    const qDelAttente = await query(
      "DELETE FROM membresEnAttenteLot WHERE idMembresAttenteLot = " +
        idMembresAttenteLot
    );
    const qAddMembres = await query(
      "INSERT INTO membresLot (idMembre, idLot) VALUES ('" +
        idMembre +
        "' , '" +
        idLot +
        "') "
    );
    console.log(idMembre, idLot);
  });
};

const addPlante = (nom, joursDeCulture) => {
  db.serialize(async () => {
    const qaddPlante = await query(
      "INSERT INTO Plantes (nom, joursDeCulture) VALUES ('" +
        nom +
        "' , '" +
        joursDeCulture +
        "')"
    );
  });
};

const planterPlante = (
  idLot,
  idPlanteur,
  idPlante,
  datePlantation,
  exemplaires
) => {
  db.serialize(async () => {
    const qplant = await query(
      "INSERT INTO Plantations (idLot, idPlanteur, idPlante, datePlantation, exemplaires) VALUES ('" +
        idLot +
        "' , '" +
        idPlanteur +
        "' , '" +
        idPlante +
        "' , '" +
        datePlantation +
        "' , '" +
        exemplaires +
        "')"
    );
  });
};
// PARTIE DELETE

const DeleteMembre = (idMembre) => {
  db.serialize(async () => {
    const qdelMembre = await query(
      "DELETE FROM Membres WHERE idMembre =" + idMembre
    );
  });
};

const DeleteJardin = (idJardin) => {
  db.serialize(async () => {
    const qdelJardin = await query(
      "DELETE FROM Jardins WHERE idJardin = " + idJardin
    );
  });
};

const DowngradeAdmin = (idAdmin, idJardin) => {
  db.serialize(async () => {
    const qdelAdmin = await query(
      "DELETE FROM Admin WHERE idAdmin =" + idAdmin + " AND idLot = " + idJardin
    );
  });
};

const DeleteLot = (idLot, idJardin) => {
  db.serialize(async () => {
    const qdelLot = await query(
      "DELETE FROM Lot WHERE idLot = " + idLot + " AND idJardin =" + idJardin
    );
  });
};

const DeleteDemandeAttente = (idMembresAttenteLot, idLot) => {
  db.serialize(async () => {
    const qdelAtt = await query(
      "DELETE FROM membresEnAttenteLot WHERE idMembresAttenteLot = " +
        idMembresAttenteLot +
        "AND idLot = " +
        idLot
    );
  });
};

const deletePlante = (idPlante) => {
  db.serialize(async () => {
    const qdelPlante = await query(
      "DELETE FROM Plantes WHERE idPlante = " + idPlante
    );
  });
};
const recolterPlante = (idPlantation, idPlante) => {
  db.serialize(async () => {
    const qdelRecolte = await query(
      "DELETE FROM Plantations WHERE idPlantation = " +
        idPlantation +
        " AND idPlante = " +
        idPlante
    );
  });
};
const afficherMembres = () => {
  return new Promise((resolve, reject) => {
    db.serialize(async () => {
      const data = await db.all(
        "SELECT Membres.idMembre,Membres.prenom, Membres.nom, Membres.adresse FROM Membres",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
      return data;
    });
  });
};

const afficherJardin = () => {
  return new Promise((resolve, reject) => {
    db.serialize(async () => {
      const data = await db.all(
        "SELECT Jardins.idJardin,Jardins.nom, Jardins.adresse FROM Jardins",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
      return data;
    });
  });
};

const afficherPlantes = () => {
  return new Promise((resolve, reject) => {
    db.serialize(async () => {
      const data = await db.all(
        "SELECT Plantes.idPlante, Plantes.nom, Plantes.joursDeCulture FROM Plantes",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
      return data;
    });
  });
};

const afficherLots = () => {
  return new Promise((resolve, reject) => {
    db.serialize(async () => {
      const data = await db.all(
        "SELECT idLot, nom, capacite FROM Lots",
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
      return data;
    });
  });
};
const afficher = () => {
  db.serialize(async () => {
    const qSelLots = await query("");
    const qSelmembreAtt = await query(
      "SELECT Membres.idMembre, Membres.prenom, Membres.nom FROM Membres INNER JOIN membresEnAttenteLot ON membresEnAttenteLot.idMembresAttenteLot = Membres.idMembres  "
    );
    const qSelMembreLot = await query(
      "SELECT Membres.idMembre, Membres.prenom, Membres.nom FROM Membres INNER JOIN membresLot ON membresLot.idMembresLot = Membres.idMembres  "
    );
  });
};
const afficherPlantesLots = (idJardin, idLot) => {
  db.serialize(async () => {
    const qSelPlantesLot = await query(
      "SELECT Plantations.nom, Plantations.datePlantation, Plantations.exemplaires, Membres.prenom, Membres.nom  FROM Plantations INNER JOIN Membres ON Membres.membreid = Plantations.idPlanteur"
    );
  });
};
export default {
  connect,
  addJardin,
  addLot,
  addMembres,
  promuteAdmin,
  askForLot,
  addToLot,
  addPlante,
  planterPlante,
  DeleteMembre,
  DeleteJardin,
  DowngradeAdmin,
  DeleteLot,
  DeleteDemandeAttente,
  deletePlante,
  recolterPlante,
  afficherMembres,
  afficherPlantes,
  afficherLots,
  afficherPlantesLots,
  afficherJardin,
};
