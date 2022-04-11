export interface UserInterface {
    gender: string;
    name: { first: string; last: string; title: string };
    location: {
      city: string;
      coordinates: { latitude: string; longitude: string };
      country: string;
      postcode: number;
      state: string;
      timezone: { offset: string; description: string };
    };
    email: string;
    login: {
      md5: string;
      password: string;
      uuid: string;
      username: string;
      salt: string;
      sha1: string;
      sha256: string;
    };
    dob: { age: number; date: string };
    registered: { age: number; date: string };
    phone: string;
    cell: string;
    id: { name: string; value: string };
    picture: { large: string; medium: string; thumbnail: string };
    nat: string;
  }