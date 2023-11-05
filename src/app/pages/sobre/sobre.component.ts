import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  public id: number = 0;
  public username: string = '';

  public nome: string = '';
  public sobrenome: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    // Parâmetros de URL
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.username = params['username'];
      console.log(params)
    });


    // Query Params
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.nome = queryParams['nome'];
      this.sobrenome = queryParams['sobrenome'];
      console.log(queryParams)
    });

    setInterval(() =>  {
        // this.router.navigate(['404'])
      this.router.navigateByUrl('404')
    }, 5000)

  }


}
