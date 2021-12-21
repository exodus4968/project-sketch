const serviceForm = document.querySelector(".service-form");
const serviceInput = document.querySelector(".service-input");
const serviceSubmit = document.querySelector(".service-submit")
const serviceUl = document.querySelector(".service-ul");

const flowForm = document.querySelector(".flow-form");
const flowInput = document.querySelector(".flow-input");
const flowSubmit = document.querySelector(".flow-submit")
const flowUl = document.querySelector(".flow-ul");

const SAVED_SERVICE = "savedService"
const SAVED_FLOW = "savedFlow"

let serviceArr = [];
let flowArr = [];

function savingServices() { 
    localStorage.setItem(SAVED_SERVICE, JSON.stringify(serviceArr))
};
function savingFlows() { 
    localStorage.setItem(SAVED_FLOW, JSON.stringify(flowArr))
};

function deleteLi(event) {
    const deleteTarget = event.target
    serviceArr = serviceArr.filter((target) => { return target.id !== parseInt(deleteTarget.id)});
    flowArr = flowArr.filter((target) => { return target.id !== parseInt(deleteTarget.id)});
    savingServices();
    savingFlows();
    deleteTarget.remove();
};

function paintObj(newObj) {
    const li = document.createElement("li");
    li.id = newObj.id;
    li.innerText = newObj.text;
    if(newObj.form === "service") {     
        serviceUl.appendChild(li)
    } else if(newObj.form === "flow") {     
        flowUl.appendChild(li)
    } else {
        alert("paint Error")
    }
    li.addEventListener("click", deleteLi);
}

const superHandleSubmit = {
    makeServiceObj : function(event) {
        event.preventDefault();
        const newServiceText = serviceInput.value;
        if(newServiceText === "") {
            return alert("undefined service")
        }
        const newServiceObj = {
            text : newServiceText,
            id : Date.now(),
            form : "service",
        }
        serviceArr.push(newServiceObj);
        savingServices();
        paintObj(newServiceObj)
        serviceInput.value = ""
    },
    makeFlowObj : function(event) {
        event.preventDefault();
        const newFlowText = flowInput.value;
        if(newFlowText === "") {
            return alert("input flow")
        }
        const newFlowObj = {
            text : newFlowText,
            id : Date.now(),
            form : "flow",
        }
        flowArr.push(newFlowObj);
        savingFlows();
        paintObj(newFlowObj)
        flowInput.value = ""
    }
}

const savedServices = localStorage.getItem(SAVED_SERVICE)
if(savedServices){
    const parsedServices = JSON.parse(savedServices);
    parsedServices.forEach(paintObj);
    serviceArr = parsedServices;
}

const savedFlows = localStorage.getItem(SAVED_FLOW)
if(savedFlows){
    const parsedFlows = JSON.parse(savedFlows);
    parsedFlows.forEach(paintObj);
    flowArr = parsedFlows;
}


serviceSubmit.addEventListener("click", superHandleSubmit.makeServiceObj);
flowSubmit.addEventListener("click", superHandleSubmit.makeFlowObj);



