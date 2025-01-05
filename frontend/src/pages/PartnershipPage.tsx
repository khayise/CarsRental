import React from 'react';

import { Banner } from '@components/Partnership/Banner';
import { PartnershipBlock } from '@components/Partnership/PartnershipBlock';

interface PartnershipPageProps {}

export const PartnershipPage: React.FC<PartnershipPageProps> = ({}) => {
	return (
		<>
			<Banner />
			<div className="flex flex-col mx-auto mt-24 w-full max-w-[1280px]">
				<div className="flex flex-col gap-40 mx-6">
					<PartnershipBlock
						img="https://img.freepik.com/free-photo/young-handsome-man-choosing-car-car-showroom_1303-17402.jpg?t=st=1736086194~exp=1736089794~hmac=d17ae29d4b4e89e719933230e81596ea98a22b2c414e8610e6dc5f60430e1826&w=1800"
						id="#carOwner"
						title="Partnership Program for Car Owners"
						text={`Make your car work for you even when you're away from Phuket!
                        By renting your car to our company, you can earn a steady income. We handle
                        client selection based on your preferences and ensure your car is well-maintained
                        and serviced. With transparent terms, you can earn up to 70% of each rental contract, paid 
                        immediately upon the car's return. We also guarantee thorough renter verification for 
                        your peace of mind.`}
					/>
					<PartnershipBlock
						img="https://img.freepik.com/free-photo/top-view-hands-holding-smartphone_23-2149617652.jpg?t=st=1736087729~exp=1736091329~hmac=719e869c11b5e98b9a5778a6b56a7e772a15e3d87fc15f6e64ffbca489238ee4&w=1800"
						id="#agency"
						title="Partnership Program for Travel Agencies"
						text={`Are you a travel agency sending clients to Phuket?
                        We offer a 10% commission on each car rental contract, helping
                        you create an additional revenue stream while offering your clients
                        a convenient and reliable car rental option.`}
						imgPosition="right"
					/>
					<PartnershipBlock
						img="https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg?t=st=1736087782~exp=1736091382~hmac=7edee1141a25a0ce20409eaeae773261a8a27d3e4c94c4a6e057628c6eb39c88&w=1800"
						id="#influencer"
						title="Partnership Program for Travelers and Bloggers"
						text={`Do you have a popular travel website or a blog about life on Phuket?
                        We offer commission rewards for every car rental booking made through your 
                        recommendation. If a client comes through your website or 
                        mentions you when booking, you will earn 10% from each transaction.`}
					/>
				</div>
			</div>
		</>
	);
};
