import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate{
    constructor(private _router: Router) {

    }

    canActivate(router: ActivatedRouteSnapshot): boolean {
        let id = +router.url[1].path;

        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}