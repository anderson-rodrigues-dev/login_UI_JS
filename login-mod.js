class Login{
    static login(config){
        const style = document.createElement('style');
        style.innerHTML = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap");
        * {
        box-sizing: border-box;
        }

        body {
        padding: 0;
        margin: 0;
        font-family: "Inter", sans-serif;
        background: linear-gradient(45deg, #131086, #b621f3);
        padding: 40px;
        }

        .container {
        min-height: calc(100vh - 80px);
        display: grid;
        grid-template-columns: 50% 50%;
        border-radius: 10px;
        overflow: hidden;
        }

        .login-esquerdo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 150px;
        background-color: white;
        }

        .login-direito {
        background-color: #eee;
        display: flex;
        justify-content: center;
        }

        .login-direito img {
        width: 80%;
        }

        .login-cabecalho {
        margin-bottom: 50px;
        }

        .login-cabecalho h1 {
        font-size: 40px;
        margin-bottom: 10px;
        }

        .login-cabecalho p {
        opacity: 0.7;
        }

        .login-form {
        width: 450px;
        }

        .login-form-conteudo {
        display: flex;
        flex-direction: column;
        gap: 35px;
        }

        .login-form-footer {
        display: flex;
        gap: 30px;
        margin-top: 70px;
        }

        .login-form-footer a {
        flex: 6;
        gap: 15px;
        border: 1px solid black;
        border-radius: 100px;
        padding: 0.6rem;
        justify-content: center;
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
        margin-bottom: 25px;
        }

        .login-form-footer a:hover {
        background-color: #eee;
        }

        .login-form-itens label:not(.checkboxLabel) {
        display: inline-block;
        background-color: white;
        margin-bottom: 10px;
        position: absolute;
        padding: 0 10px;
        transform: translate(30px, -10px);
        font-size: 14px;
        }

        input[type=text],
        input[type=password] {
        border: 1px solid black;
        height: 55px;
        padding: 0 2rem;
        width: 100%;
        outline: none;
        transition: background 0.5s;
        font-size: 18px;
        border-radius: 100px;
        }

        .checkbox {
        display: flex;
        align-items: center;
        gap: 7px;
        }

        input[type=checkbox] {
        width: 20px;
        height: 20px;
        accent-color: #131086;
        }

        .login-form-coteudo button {
        border: none;
        background: linear-gradient(45deg, #131086, #b621f3);
        color: white;
        padding: 1rem;
        border-radius: 100px;
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        height: 55px;
        cursor: pointer;
        }

        /* Responsivo */
        @media (max-width: 1350px) {
        .login-esquerdo {
            padding: 50px !important;
        }
        .login-form {
            width: 100%;
        }
        .login-form-footer {
            flex-direction: column;
            gap: 15px;
        }
        }
        @media (max-width: 768px) {
        body {
            padding: 20px;
        }
        .container {
            grid-template-columns: auto;
        }
        .login-direito {
            display: none;
        }
        }`;
        document.head.appendChild(style);

        if(!config){
            config = {
                titulo: "Seja Bem-Vindo!",
                descricao: "Faça o login para continuar",
                imgLogin: "./506b575739e90613428cdb399175e2c8-desenho-de-astronauta-espacial.png"
            };
        };

        const container = document.createElement('div');
        container.setAttribute('class','container');
        document.body.prepend(container);

        const login_esquerdo = document.createElement('div');
        login_esquerdo.setAttribute('class','login-esquerdo');
        container.appendChild(login_esquerdo);

        const login_cabecalho = document.createElement('div');
        login_cabecalho.setAttribute('class','login-cabecalho');
        login_esquerdo.appendChild(login_cabecalho);

        const h1_cabecalho = document.createElement('h1');
        h1_cabecalho.innerHTML = config.titulo;
        login_cabecalho.appendChild(h1_cabecalho);

        const p_cabecalho = document.createElement('p');
        p_cabecalho.innerHTML = config.descricao;
        login_cabecalho.appendChild(p_cabecalho);

        const login_form = document.createElement('form');
        login_form.setAttribute('class','login-form')
        login_esquerdo.appendChild(login_form);

        const login_form_conteudo = document.createElement('div');
        login_form_conteudo.setAttribute('class','login-form-conteudo');
        login_form.appendChild(login_form_conteudo);

        const login_form_itens = document.createElement('div');
        login_form_itens.setAttribute('class','login-form-itens');
        login_form_conteudo.appendChild(login_form_itens);

        const label_login_form_itens = document.createElement('label');
        label_login_form_itens.setAttribute('for','email');
        label_login_form_itens.innerHTML = "E-mail";
        login_form_itens.appendChild(label_login_form_itens);

        const input_login_form_itens = document.createElement('input');
        input_login_form_itens.setAttribute('type','text');
        input_login_form_itens.setAttribute('id','email');
        login_form_itens.appendChild(input_login_form_itens);
        
        //

        const login_form_itens2 = document.createElement('div');
        login_form_itens2.setAttribute('class','login-form-itens');
        login_form_conteudo.appendChild(login_form_itens2);

        const label_login_form_itens2 = document.createElement('label');
        label_login_form_itens2.setAttribute('for','password');
        label_login_form_itens2.innerHTML = "Senha";
        login_form_itens2.appendChild(label_login_form_itens2);

        const input_login_form_itens2 = document.createElement('input');
        input_login_form_itens2.setAttribute('type','password');
        input_login_form_itens2.setAttribute('id','password');
        login_form_itens2.appendChild(input_login_form_itens2);

        //

        const login_form_itens3 = document.createElement('div');
        login_form_itens3.setAttribute('class','login-form-itens');
        login_form_conteudo.appendChild(login_form_itens3);
        
        const checkbox = document.createElement('div');
        checkbox.setAttribute('class','checkbox');
        login_form_itens3.appendChild(checkbox);

        const input_checkbox = document.createElement('input');
        input_checkbox.setAttribute('type','checkbox');
        input_checkbox.setAttribute('id','ckManterConectado');
        input_checkbox.checked = true;
        checkbox.appendChild(input_checkbox);

        const label_checkbox = document.createElement('label');
        label_checkbox.setAttribute('for','ckManterConectado');
        label_checkbox.setAttribute('class','checkboxLabel')
        label_checkbox.innerHTML = "Manter Conectado";
        checkbox.appendChild(label_checkbox);

        const btn_Login = document.createElement('button');
        btn_Login.setAttribute('type','submit');
        btn_Login.setAttribute('id','btnLogin');
        btn_Login.innerHTML = "Login"
        login_form_conteudo.appendChild(btn_Login);

        const login_form_footer = document.createElement('div');
        login_form_footer.setAttribute('class','login-form-footer');
        login_form.appendChild(login_form_footer);

        const a_facebook = document.createElement('a');
        a_facebook.setAttribute('href','#');
        a_facebook.innerHTML =  "Login Facebook";
        login_form_footer.appendChild(a_facebook);

        const img_facebook = document.createElement('img');
        img_facebook.setAttribute('width','30');
        img_facebook.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/768px-Facebook_f_logo_%282019%29.svg.png");
        a_facebook.prepend(img_facebook);
        
        const a_google = document.createElement('a');
        a_google.setAttribute('href','#');
        a_google.innerHTML =  "Login Google";
        login_form_footer.appendChild(a_google);

        const img_google = document.createElement('img');
        img_google.setAttribute('width','30');
        img_google.setAttribute('src',"https://logopng.com.br/logos/google-37.png");
        a_google.prepend(img_google);

        const login_direito = document.createElement('div');
        login_direito.setAttribute("class",'login-direito');
        container.appendChild(login_direito);

        const img_login = document.createElement('img');
        img_login.setAttribute('src',config.imgLogin);
        login_direito.appendChild(img_login);
    }
    static verificar(){
        const inputs = [...document.querySelectorAll('input')];
        const form = document.querySelector('.login-form');
        const btnLogin = document.querySelector('#btnLogin');

        inputs.map((el)=>{
            if(el.type != "checkbox"){
                if(el.value==""){
                    form.addEventListener('submit',(evt)=>{
                        evt.preventDefault();
                    })
                    el.style.borderColor = "#f00";
                    el.previousSibling.style.color = "#f00";

                    el.addEventListener('click',(evt)=>{
                        el.style.borderColor = "#000";
                        el.previousSibling.style.color = "#000"
                    })
                } else {
                    form.submit();
                }
            }
        })
    }
};
