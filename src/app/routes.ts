import { FamilyComponent } from './manage/family/family.component';
import { PetComponent } from './manage/pet/pet.component';
import { ManageComponent } from './manage/manage.component';
import { SoonComponent } from "./soon/soon.component";

export default [
    { path: 'schedule', component: SoonComponent },
    {
		path: 'manage',
		component: ManageComponent,
		children: [
			{
				path: '',
				children: [
					{
						path: 'pet',
						component: PetComponent
					},
					{
						path: 'family',
						component: FamilyComponent
					},
					{
						path: 'service',
						component: SoonComponent
					},
					{
						path: 'appointment',
						component: SoonComponent
					}
				]
			}
		]
	}
]