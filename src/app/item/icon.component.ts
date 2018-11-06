import { Component, OnChanges, Input } from '@angular/core';

import { Item } from './item';

@Component({
    selector: 'app-icon',
    template: '<Image [src]="image" class="thumb img-rounded"></Image>',
})
export class IconComponent implements OnChanges {
    @Input() item: Item;
    image: string;

    ngOnChanges() {
        // This works fine...
        // this.image = 'https://icons.bitwarden.net/' + this.item.name + '/icon.png';

        // This doesn't...
        this.doSomething().then(() => {
            this.image = 'https://icons.bitwarden.net/' + this.item.name + '/icon.png';
        });
    }

    private doSomething() {
        // Do some stuff...
        return Promise.resolve();
    }
}
