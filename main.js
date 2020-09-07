const template = document.createElement("template");
template.innerHTML =` <table border="1"> 
<tr> 
   <td colspan="3"><input type="text" class="result"/></td> 
   <td><input class="clear"type="button" value="c"/> </td> 
</tr> 
<tr> 
   <td><input class="display" type="button" value="1"/> </td> 
   <td><input class="display" type="button" value="2"/> </td> 
   <td><input  class="display" type="button" value="3" /> </td> 
   <td><input  class="display" type="button" value="/"/> </td> 
</tr> 
<tr> 
   <td><input class="display"  type="button" value="4"/> </td> 
   <td><input class="display"  type="button" value="5" /> </td> 
   <td><input class="display"  type="button" value="6" /> </td> 
   <td><input  class="display" type="button" value="-" /> </td> 
</tr> 
<tr> 
   <td><input class="display"  type="button" value="7"/> </td> 
   <td><input  class="display" type="button" value="8"/> </td> 
   <td><input  class="display" type="button" value="9"/> </td> 
   <td><input  class="display" type="button" value="+"/> </td> 
</tr> 
<tr> 
   <td><input class="display"  type="button" value="." /> </td> 
   <td><input class="display" type="button" value="0"/> </td> 
   <td><input class="equal" type="button" value="="/> </td> 
   <td><input class="display" type="button" value="*" /> </td> 
</tr> 
</table>`
let flag=0;
class MyElement extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      const button = this._shadowRoot.querySelector(".equal");
        button.addEventListener("click", this.solve.bind(this) );
        const button_dis= this._shadowRoot.querySelectorAll(".display");

        for (let i = 0; i < button_dis.length; i++) 
        {
            let val=button_dis[i].value;
            button_dis[i].onclick = dis => {
                if(flag==1 && i!=3 && i!=7 && i!=11 && i!=15)
                {
                    this._shadowRoot.querySelector(".result").value ="";
                    flag=0;
                }
                else
                {
                    flag=0;
                }
            this ._shadowRoot.querySelector(".result").value+=val;
            }
        }
        const button_clr = this._shadowRoot.querySelector(".clear");
        button_clr.addEventListener("click", this.clr.bind(this) );
    }


        solve(e) {
            this._shadowRoot.querySelector(".result").value = eval(this._shadowRoot.querySelector(".result").value); 
            flag=1;
        e.preventDefault();
        }
        clr(e) {
            this._shadowRoot.querySelector(".result").value ="";
        }
   
  }
  customElements.define("my-element", MyElement);