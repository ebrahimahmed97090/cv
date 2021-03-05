import {
    Component,
    OnInit
} from '@angular/core';
import * as M from 'materialize-css';

@Component ({
                selector   : 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls  : ['./sidenav.component.scss']
            })
export class SidenavComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        const elems = document.querySelectorAll ('.sidenav');
        const instances = M.Sidenav.init (elems,
                                          {});


        const elemss = document.querySelectorAll ('.fixed-action-btn');
        const instancess = M.FloatingActionButton.init (elemss,
                                                        {direction: 'right',
                                                            hoverEnabled: false
                                                        });

    }

}
