import BDAlimenthe from "./BD/alimentheBD.js"

const ok = async () =>{
    await BDAlimenthe.connect()
};
const addJardinBackend = async (nom, adresse) => {
    await BDAlimenthe.addJardin(nom, adresse)
};
const addLotBackEnd = async (nom, capacite, idJardin) => {
    await BDAlimenthe.addLot(nom,capacite,idJardin)
}
const addMembreBackEnd = async (prenom, nom, motDePasse, adresse) => {
    await BDAlimenthe.addMembres(prenom, nom, motDePasse, adresse)
}
const promuteAdminBackend = async (idMembre, idJardin) => {
    await BDAlimenthe.promuteAdmin(idMembre, idJardin)
}
const askForLotBackend = async (idMembre, idLot) => {
    await BDAlimenthe.askForLot(idMembre, idLot)
}
const addToLotBackend = async (idMembre,idLot,idMembresAttenteLot) => {
    await BDAlimenthe.addToLot(idMembre, idLot, idMembresAttenteLot)
}
const addPlanteBackend = async(nom, joursDeCulture) =>{
    await BDAlimenthe.addPlante(nom, joursDeCulture)
}
const planterPlanteBackend = async(idLot, idPlanteur, idPlante, datePlantation, exemplaires) => {
    await BDAlimenthe.planterPlante(idLot, idPlanteur, idPlante, datePlantation, exemplaires)
}
const DeleteMembreBackEnd = async(idMembre) => {
    await BDAlimenthe.DeleteMembre(idJardin)
}

const DeleteJardinBackend = async(idJardin) => {
    await BDAlimenthe.DeleteJardin(idAdmin, idJardin)
}
const DowngradeAdminBackend = async(idAdmin, idJardin) => {
    await BDAlimenthe.DowngradeAdmin(idAdmin, idJardin)
}
const DeleteLotBackend = async(idLot, idJardin) =>{
    await BDAlimenthe.DeleteLot(idLot, idJardin)
}
const DeleteDemandeAttenteBackend = async(idMembresAttenteLot, idLot) => {
    await BDAlimenthe.DeleteDemandeAttente(idMembresAttenteLot, idLot)
}
const deletePlanteBackend = async(idPlante) => {
    await BDAlimenthe.deletePlante(idPlante)
}
const recolterPlanteBackend = async(idPlantation, idPlante) => {
    await BDAlimenthe.recolterPlante(idPlantation, idPlante)
}
const afficherMembresBackend = async() => {
    await BDAlimenthe.afficherMembres()
}
const afficherPlantesBackend  = async() =>{
    await BDAlimenthe.afficherPlantes()
}
const afficherLotsBackend = async() => {
    await BDAlimenthe.afficherLots()
}
const afficherPlantesLotsBackend = async(idJardin, idLot) => {
    await BDAlimenthe.afficherPlantesLots(idJardin, idLot)
}
export default { ok, addJardinBackend, addLotBackEnd, addMembreBackEnd, 
                 promuteAdminBackend, askForLotBackend, addToLotBackend, addPlanteBackend , 
                 planterPlanteBackend,DeleteMembreBackEnd, DeleteJardinBackend, DowngradeAdminBackend, DeleteLotBackend,
                 DeleteDemandeAttenteBackend,deletePlanteBackend , recolterPlanteBackend,afficherMembresBackend, afficherPlantesBackend,
                 afficherLotsBackend, afficherPlantesLotsBackend}