import {Injectable} from '@angular/core';

import {Nutrition} from './nutrition';
import {NUTRITIONS} from './mock-nutrition';

@Injectable()
export class NutritionService {
    getNutritions(): Promise<Nutrition[]> {
        return Promise.resolve(NUTRITIONS);
    }
}