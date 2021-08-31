import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any

  // Dados fictícios para simular validação
  emailDB: string = "email@teste.com";
  senhaDB: string = "12345678";

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login() {
    console.log('passei no metodo')
    const email = this.loginForm.get('email').value
    const senha = this.loginForm.get('senha').value

    // Validação simples apra simular
    if (this.loginForm.get('email').value == this.emailDB && this.loginForm.get('senha').value == this.senhaDB) {
      console.log('Login com sucesso!!!')
      this.router.navigate(['home'])
    } else {
      console.log("Dados incorretos")
    }
  }

}
