import { ContractBlock } from '@components/Contract/ContractBlock';
import React from 'react';

interface ContractPageProps {}

const contractBlocksList: IContractBlock[] = [
	{
		title: 'Main Terms',
		terms: [
			`The Lessor agrees to provide the vehicle to the Client 
            and guarantees that, at the time of delivery, the vehicle is 
            suitable for its intended use.`,

			`Upon delivery of the vehicle for rent, both parties are 
            responsible for inspecting the condition of the vehicle. 
            Any visible damage must be documented through photographs 
            by both parties.`,

			`The Lessee guarantees that they or any other authorized 
            individuals as per this Agreement possess all necessary 
            permits to operate the vehicle and that they are not 
            suffering from any physical or mental conditions that would 
            impair their ability to drive.`,

			`In the case of early termination of the Agreement at the 
            initiative of the Lessee, the Lessor retains the right to 
            decide on the return of any payments to the Lessee.`,
		],
	},

	{
		title: 'Lessee’s Obligations',
		terms: [
			`The Lessee agrees to maintain the vehicle in a 
            technically sound condition, preventing any 
            deterioration except for natural wear and tear, 
            and not use the vehicle in the following situations: 
            for the transportation of prohibited or hazardous goods, 
            for transporting passengers for profit, for driving 
            instruction, or for towing or moving other vehicles`,

			`The Lessee agrees to pay any fines or penalties 
            incurred during the use of the vehicle at their own expense.`,

			`The Lessee agrees to return the vehicle in its original 
            condition, free of external and internal dirt. In case of 
            failure to do so, the Lessee must pay for the vehicle wash 
            at the market rate of 450 baht, depending on the type of 
            the vehicle.`,

			`The Lessee agrees not to smoke in the vehicle. If 
            smoking occurs, the Lessee will pay for the chemical 
            cleaning and replacement of the cabin air filter, 
            amounting to 1500 baht.`,

			`The Lessee agrees not to drive the vehicle while 
            under the influence of alcohol or drugs.`,

			`In the event of damage to the vehicle, the Lessee 
            is obliged to: immediately inform the Lessor of the 
            incident, call the police to the scene in case of 
            an accident to create a protocol, and provide the 
            Lessor with a copy of the police report 
            detailing the vehicle damage.`,

			`The Lessee must contact the Lessor and agree on 
            the time and conditions for the return (or extension) 
            of the vehicle at the expiration of the rental period. 
            In case of delayed return, the Lessee will pay a fine of 
            300 baht. If the vehicle is delayed by more than three
            hours, the Lessee must pay a fine equivalent 
            to the daily rental cost.`,

			`Upon expiration of the rental period, the Lessee must 
            return the vehicle to the Lessor in good condition, 
            considering normal wear and tear and with an equivalent 
            level of fuel. Alternatively, the Lessee must pay for any difference.`,
		],
	},

	{
		title: 'Lessor’s Responsibility',
		terms: [
			`If both parties deem the vehicle unfit for use, 
            the Lessor is obligated to replace it with 
            another alternative vehicle within a short period.`,

			`The Lessor is not responsible for any damage 
            caused by vehicle defects or breakdowns that 
            occurred through no fault of the Lessor during 
            the entire rental period.`,

			`The Lessor has the right to terminate the 
            Agreement early if the Lessee violates any 
            of the Agreement’s terms or provides false 
            information at the time of signing the Agreement. 
            In such a case, the Lessor is entitled to 
            immediately reclaim the vehicle from the Lessee.`,
		],
	},
];

export const ContractPage: React.FC<ContractPageProps> = ({}) => {
	return (
		<>
			<div className="flex flex-col mx-auto mt-24 w-full max-w-[1280px]">
				<div className="mx-6">
					<h2>CAR RENTAL AGREEMENT</h2>
					<p className="text-balance text-md">
						The rental conditions are an integral part of this Agreement. The Client’s signature on
						the Agreement indicates their consent to the terms and confirms that the Lessor has
						acquainted the Client with each clause of the terms governing their relationship.
					</p>
					<section className="flex flex-col gap-10 mt-10">
						{contractBlocksList.map((contractBlock, index) => (
							<ContractBlock
								key={contractBlock.title}
								outerIndex={index}
								contractBlock={contractBlock}
							/>
						))}
					</section>
				</div>
			</div>
		</>
	);
};
