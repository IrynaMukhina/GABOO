import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private pageComponents: pageComponent[];

  constructor() { }
}

interface pageComponent {
  selector: string;
  name: string;
  id: number;
  offSet: number; 
}
