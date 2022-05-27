import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import BackendAlimenthe from "./AlimentheBackend.js"
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req,res) => {
    try {
    BackendAlimenthe.ok()
    res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }

});

app.post("/addJardin", async (req,res) =>{
    try {
        await BackendAlimenthe.addJardinBackend(req.body.nom, req.body.adresse);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.sendStatus(400);
    }
})


app.post("/addLot", async (req, res) =>{
    try {
        await BackendAlimenthe.addLotBackEnd(req.body.nom, req.body.capacite, req.body.idJardin)
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(400)
    }
})

app.post("/addMembres", async (req, res) =>{
    try {
        await BackendAlimenthe.addMembreBackEnd(req.body.prenom, req.body.nom, req.body.motDePasse, req.body.adresse)
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(400)
    }
})

app.post("/promuteAdmin", async (req,res) => {
    try {
        await BackendAlimenthe.promuteAdminBackend(req.body.idMembre, req.body.idJardin)
        res.sendStatus(200);
    } catch(e){
        console.log(e)
        res.sendStatus(400)
    }
})
app.post("/askForLot" , async (req,res) => {
    try {
        await BackendAlimenthe.askForLotBackend(req.body.idMembre, req.body.idLot)
        res.sendStatus(200);
    } catch(e){
        console.log(e)
        res.sendStatus(400)
    }
})
app.post("/addToLot", async (req,res) => {
    try {
        await BackendAlimenthe.addToLotBackend(req.body.idMembre, req.body.idLot, req.body.idMembresAttenteLot)
        res.sendStatus(200);
    } catch(e){
        console.log(e)
        res.sendStatus(400)
    }
})
app.post("/addPlante", async (req,res) => {
    try {
        await BackendAlimenthe.addPlanteBackend(req.body.nom, req.body.joursDeCulture)
        res.sendStatus(200);
    } catch(e){
        console.log(e)
        res.sendStatus(400)
    }
})

app.post("/planter", async (req,res) =>{
    try{

        await BackendAlimenthe.planterPlanteBackend(req.body.idLot, req.body.idPlanteur, req.body.idPlante, req.body.datePlantation, req.body.exemplaires)
        res.sendStatus(200)
    } catch (e){
        console.log(e)
        res.sendStatus(400)
    }
})

app.post("/DeleteMembre", async (req,res) => {
    try {
        await BackendAlimenthe.DeleteMembreBackEnd(req.body.idMembre)
    } catch (e) {

    }
})
app.post("/DeleteJardin", async (req,res) => {
    try {
        await BackendAlimenthe.DeleteJardinBackend(req.body.idJardin)
    } catch (e) {

    }
})
app.post("/downgradeAdmin", async (req,res) => {
    try {
        await BackendAlimenthe.DowngradeAdminBackend(req.body.idAdmin, req.body.idJardin)
    } catch (e) {

    }
})
app.post("/DeleteLot", async (req,res) => {
    try {
        await BackendAlimenthe.DeleteLotBackend(req.body.idLot, req.body.idJardin)
    } catch (e) {

    }
})
app.post("/DeleteDemandAttente", async (req,res) => {
    try {
        await BackendAlimenthe.DeleteDemandeAttenteBackend(req.body.idMembresAttenteLot, req.body.idLot)
    } catch (e) {

    }
})
app.post("/DeletePlante"), async (req,res) => {
    try {
        await BackendAlimenthe.deletePlanteBackend(req.body.idPlante)
    } catch (e) {

    }
}
app.post("/RecolterPlante", async (req,res) => {
    try {
        await BackendAlimenthe.recolterPlanteBackend(idPlantation, idPlante)
    } catch (e) {

    }
})
app.post("/afficherMembres", async (req,res) => {
    try {
        await BackendAlimenthe.afficherMembresBackend()
    } catch (e) {

    }
})
app.post("/afficherPlantes", async (req,res) => {
    try {
        await BackendAlimenthe.afficherPlantesBackend()
    } catch (e) {

    }
})
app.post("/afficherLots", async (req,res) => {
    try {
        await BackendAlimenthe.afficherLotsBackend()
    } catch (e) {

    }
})
app.post("/afficherPlantesLots", async (req,res) => {
    try {
        await BackendAlimenthe.afficherPlantesLotsBackend(idJardin, idLot)
    } catch (e) {

    }
})

app.listen(3000);