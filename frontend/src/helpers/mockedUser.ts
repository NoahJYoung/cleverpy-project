import { UserData } from "src/api/requests/users"
import { generateRandomId } from "src/app/helpers"

export const mockedUser = {
	id: generateRandomId(),
	username: 'testUser',
	email: 'test@test.com',
	name: 'Test User',
	password: 'test',
	phone: '(999)-999-9999',
	website: 'testUser.com',
	address: {
		street: 'test Street',
		city: 'test city',
		suite: '11',
		zipcode: '11111',
		geo: {
			lat: '1',
			lng: '1',
		},
	},
	company: {
		name: 'company name',
		catchPhrase: 'company catchphrase',
		bs: 'text content',
	}
}