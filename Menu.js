import { DANH_SACH_MON_AN } from "../ultilities/settings.js";
import { MonAn } from "./MonAn.js";

export class Menu {
    danhSachMonAn = []

    themMonAn(monAn) {
        this.danhSachMonAn.push(monAn);
    }

    luuLocalStorage(){

        let sDSMA = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_MON_AN, sDSMA)
    }

    layLocalStorage(){
        if(localStorage.getItem(DANH_SACH_MON_AN)) {
            let sDSMA = localStorage.getItem(DANH_SACH_MON_AN);
            this.danhSachMonAn = JSON.parse(sDSMA);
        }
    }

    xoaMonAn(maMonAn){
        this.danhSachMonAn = this.danhSachMonAn.filter(mon => mon.maMonAn !== maMonAn);
        return this.danhSachMonAn;
    }

    renderTableMonAn(selectorMonAn){

        let htmlContent = '';
        for(let monAnStore of this.danhSachMonAn){
            let monAn = new MonAn();
            monAn = {...monAn,...monAnStore};
            htmlContent += `
                <tr>
                    <td>${monAn.maMonAn}</td> 
                    <td>${monAn.tenMonAn}</td> 
                    <td>${monAn.giaTien}</td> 
                    <td><img src="${monAn.linkAnh}" width="50" height="50" /></td> 
                    <td>
                    <button class="btn btn-danger" onclick='xoaMonAn(${monAn.maMonAn})'>Xóa</button>
                     </td> 
                </tr>
            
            `
        }

        document.querySelector(selectorMonAn).innerHTML = htmlContent;
    } 
}