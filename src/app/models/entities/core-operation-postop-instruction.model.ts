//BEGIN LICENSE BLOCK 
//Interneuron Terminus

//Copyright(C) 2021  Interneuron CIC

//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

//See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program.If not, see<http://www.gnu.org/licenses/>.
//END LICENSE BLOCK 
import { EntityBase } from './entity-base.model';

export class CoreOperationPostopInstruction extends EntityBase {
    operationpostopinstructions_id: string;
    operation_id: string;
    observation: string;
    postoperativeantibiotics: string;
    rehabilitation: string;
    weightbearingstatuscode: string;
    weightbearingstatustext: string;
    weightbearingstatusfurtherinformation: string;
    anticipateddayofdischarge: string;
    woundcheck: string;
    clinicreview: string;
    anticipatedbloodloss: string;
    prophylaxis: string;
    prophylaxistype: string;
    careplanpathway: string;
    mechanicalsection:string;
    mechanicaltedoption: string;
    mechanicalscdoption: string;
    mechanicalted:boolean = false;
    mechanicalscd:boolean = false;
    bedresttext: string;
}
