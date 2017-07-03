import { Injectable } from '@angular/core';

const ACCESS_PROFILE_START = 31;
const ACCESS_PROFILE_ENDING = 47;

@Injectable()
export class FileclassifierService {


  constructor() { }


  public getFileSpecification(id) {
    console.log(id)
    if (id > ACCESS_PROFILE_START && id < ACCESS_PROFILE_ENDING) {
      return 'ACCESS_PROFILE';
    }

    switch (id) {
      case 0: return 'UID';
      case 1: return 'FACTORY_SETTINGS';
      case 2: return 'FIRMWARE_VERSION';
      case 3: return 'DEVICE_CAPACITY';
      case 4: return 'DEVICE_STATUS';
      case 5: return 'ENGINEERING_MODE';
      case 10: return 'DLL_CONFIGURATION';
      case 11: return 'TRL_STATUS';
      case 12: return 'SEL_CONFIGURATION';
      case 13: return 'SEL_STATUS';

      default: return 'NOT IMPLEMENTED';
    }


  }

  

}
