import React from 'react';
import { Collapse, CollapseProps } from 'antd';

interface QuestionsSectionProps {}

export const QuestionsSection: React.FC<QuestionsSectionProps> = ({}) => {
	const items: CollapseProps['items'] = [
		{
			key: '1',
			label: 'What is required to rent a car?',
			children: (
				<p>
					To rent a car, you need to provide your international passport to the car rental staff
					(for a photo of the first page) and a valid international driving license. Then, you must
					pay in cash for the chosen rental period in Thai Baht or US Dollars. Payment is also
					possible in any currency convertible within Thailand, via transfer to a bank account, or
					by USDT transfer (exchange rate to be discussed individually). Additionally, you will need
					to leave a deposit, the amount of which is specified in the car’s details. The deposit is
					refunded when the car is returned at the end of the rental period.
				</p>
			),
		},
		{
			key: '2',
			label: 'What insurance applies to rental cars?',
			children: (
				<p>
					We offer basic insurance coverage with the option to upgrade to full coverage. Standard
					insurance includes protection against theft, third-party liability, and damage to the
					rented vehicle in the event of a traffic accident, provided two conditions are met: first,
					the driver must be sober, and second, a police report confirming the driver's (renter's)
					innocence must be available. Full insurance will cover any unforeseen expenses in case of
					an accident without requiring the involvement of police officers or insurance agents. We
					strongly recommend reviewing the two proposed insurance options before signing the
					contract to ensure full confidence in your protection.
				</p>
			),
		},
		{
			key: '3',
			label:
				'Do you have any age restrictions for renters or additional fees for minimal driving experience?',
			children: (
				<p>
					We rent cars to individuals aged 21 and older. If you are under 21, additional rental
					conditions may apply. The driver must also have a valid driver's license with at least two
					years of driving experience.
				</p>
			),
		},
		{
			key: '4',
			label: 'What should I do in case of an accident or vehicle damage on the road?',
			children: (
				<p>
					First, you should contact us via phone, WhatsApp, or Telegram and inform us about the
					incident. We will provide detailed guidance on the next steps.
				</p>
			),
		},
	];
	return (
		<>
			<section className="flex flex-col gap-4 mt-20 w-full">
				<h2 className="text-center">Do you have questions?</h2>
				<Collapse size="large" accordion items={items} />
			</section>
		</>
	);
};
