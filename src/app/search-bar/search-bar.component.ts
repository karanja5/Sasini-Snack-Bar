import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})


export class SearchBarComponent implements OnInit {

  query: string = '';

  constructor(private route: ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['query'])
      this.query = params['query'];
    })
  }
  find() : void {
    if (this.query)
      this.router.navigateByUrl('/search/' + this.query);
    else 
      this.router.navigateByUrl('');
    
  }
}
