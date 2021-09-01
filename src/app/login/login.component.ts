import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  // Dados fictícios para simular validação
  emailDB: string = "teste@hotmail.com";
  senhaDB: string = "123456";

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
      alert('Login com sucesso!!!')
      this.router.navigate(['/home'])
    } else {
      alert("Dados incorretos")
    }
  }

}
