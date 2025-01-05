import React from 'react';

import { ArticleCover } from '@components/Routes/ArticleCover';
import { PlaceDescription } from '@components/Routes/PlaceDescription';
import { TextContainer } from '@components/Routes/TextContainer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Paragraph } from '../components/Routes/Paragraph';
import { Span } from '@components/Routes/Span';

interface RoutesPageProps {}

export const RoutesPage: React.FC<RoutesPageProps> = ({}) => {
	return (
		<>
			<h1 className="mt-24 px-6 text-center">The 7 best road trips in Thailand</h1>
			<LazyLoadImage
				src="https://lp-cms-production.imgix.net/2024-10/GettyImages-1379113010-cropped.jpg?w=1440&h=810&fit=crop&auto=format&q=75"
				alt="Image"
			/>

			<div className="flex flex-col mx-auto w-full max-w-[1280px]">
				<div className="mx-6">
					<span className="block text-right mt-1 text-sm italic">
						Outside of chaotic Bangkok, the roads in Thailand are well maintained and traffic is
						(relatively) calm. Getty Images
					</span>
				</div>
				<section className="mt-24 w-full">
					<article className="flex flex-col justify-center items-center mx-6">
						<TextContainer>
							<Paragraph>
								If your first port of arrival in Thailand is Bangkok, the notion of taking to the
								road might seem nuts.
							</Paragraph>

							<Paragraph>
								In the Thai capital, cars are stacked bumper to bumper, motorcycles vie for space
								with pedestrians and seemingly anything goes when it comes to road rules.
							</Paragraph>

							<Paragraph>But Bangkok is not all of Thailand. Far from it. </Paragraph>

							<Paragraph>
								Once you escape the capital, traffic conditions calm considerably – though you’ll
								always need to be cautious of speeding trucks and buses and a steady throng of
								motorcyclists. The good news is that Thailand’s roads are mostly well maintained,
								car- and motorcycle-rental costs are moderate, and there’s so much to see in this
								fabulous country that you’ll discover something exciting on even a short jaunt.
							</Paragraph>

							<Paragraph>
								The smart way to road trip in Thailand is to start outside Bangkok, renting a
								vehicle in one of Thailand’s smaller towns. The further you veer from the tourist
								trail, the quieter the roads and the more there is to encounter in the towns and
								villages you pass through on the way.
							</Paragraph>

							<Paragraph>
								Excited yet? Read on for more about our favorite road trips in Thailand.
							</Paragraph>
						</TextContainer>

						<ArticleCover
							src="https://lp-cms-production.imgix.net/2024-10/shutterstock2480720525.jpg?fit=crop&w=2048&auto=format&q=75"
							text="A quick jaunt through the forested mountains around Chiang Mai will give drivers a taste of Thailand’s natural beauty. Mike Towers/Shutterstock"
						/>

						<TextContainer title="1. Mae Sa Valley">
							<PlaceDescription
								title="Best road trip for first-timers"
								place="Chiang Mai–Chiang Mai; 80km (50 miles); allow 1 day"
							/>
							<Paragraph>
								A great taster trip to get you used to driving or riding in Thailand, this circuit
								through the forested mountains north of Chiang Mai will introduce you to village
								life and the jade-green rainforest landscapes of Northern Thailand. After leaving
								Chiang Mai, the crowds drop away as you get closer to Nam Tok Mae Sa, a natural
								swimming pool that makes a lovely picnic spot.
							</Paragraph>

							<Paragraph>
								Continue to the Queen Sikrit Botanical Gardens, a collection of plantations, walking
								trails and greenhouses plus a family-friendly natural-history museum. From here, you
								enter a part of the country that was once used to grow opium poppies before the Thai
								royal family persuaded hill tribe farmers to switch to fruit and flowers.
							</Paragraph>

							<Paragraph>
								Experience village life with a detour north to the Hmong community of Nong Hoi,
								where the local restaurants at Mon Cham serve tasty village food and Thai fruit
								liqueurs in pavilions overlooking the valley. The loop back to Chiang Mai on the
								1269 passes Samoeng village and a series of spectacular viewpoints where you can
								pause for photos before arriving back to town.
							</Paragraph>

							<Paragraph>
								<Span>Planning tip:</Span> Get an early start to make the most of this day-long road
								trip, grabbing a portable breakfast at the Talat Thanin food market before you set
								off.
							</Paragraph>
						</TextContainer>

						<ArticleCover
							src="https://lp-cms-production.imgix.net/2024-08/500pxRF47607458.jpg?fit=crop&w=2048&auto=format&q=75"
							text="Phitsanulok is a lively town on the route between Bangkok and Chiang Mai. Anocha Tumsuk/500px"
						/>

						<TextContainer title="2. Bangkok to Chiang Mai">
							<PlaceDescription
								title="Best road trip for history"
								place="Bangkok–Chiang Mai; 583 km (362 miles); 3 to 4 days"
							/>

							<Paragraph>
								If you’re brave enough to start in Bangkok, the drive from the capital to Chiang Mai
								packs in a lot of history and some of Thailand’s most spectacular ancient sites. The
								hardest part is the beginning, as you escape Bangkok’s gravitational pull on Route
								347. Fortunately, it’s only 90 minutes to Ayutthaya, the first stop on the route.
							</Paragraph>

							<Paragraph>
								Explore the ruins of the imperial city that was Siam’s capital from 1350 to 1767,
								then continue north on Route 32, making a detour east to view Lopburi’s
								monkey-thronged Prang Sam Yot temple. Back on the highway, it’s a sustained slog
								north to Phitsanulok, where you can pay your respects to one of Thailand’s most
								revered Buddha images at Wat Phra Si Rattana Mahathat.
							</Paragraph>

							<Paragraph>
								The next stop is stunning Sukhothai, whose ruined stupas and temples were the hub of
								a powerful Thai kingdom from the 13th to the 14th century. Break the journey north
								with a homestay at Ban Na Ton Cham or an overnight (or longer) stop in hip Lampang,
								where more local movers and shakers throng cool cafes. Lamphun makes for another
								worthy stop before you roll into Chiang Mai and head straight for the night markets
								to feast.
							</Paragraph>

							<Paragraph>
								<Span>Detour:</Span> To add some contemporary history to the trip, tack on a detour
								to Kanchanaburi, between Bangkok and Ayutthaya. Made infamous by the Burma–Siam
								Railway, this town on the Mae Nam Khwae Yai River is today a hub for encounters with
								history and day trips to splash in the waterfalls of Erawan National Park.
							</Paragraph>
						</TextContainer>

						<ArticleCover
							src="https://lp-cms-production.imgix.net/2024-10/GettyImages-1291157781.jpg?fit=crop&w=2048&auto=format&q=75"
							text="Wherever you find yourself in Isan, always leave plenty of time to eat: the region may have Thailand’s tastiest cuisine. Getty Images"
						/>

						<TextContainer title="3. An Isan loop">
							<PlaceDescription
								title="Best off-the-beaten-track road trip"
								place="Nakhon Ratchasima–Nakhon Ratchasima; 830km (515 miles); one week"
							/>

							<Paragraph>
								Travelers gush about Thailand’s Isan region – the tract of land that runs northeast
								from Bangkok up to the Lao and Cambodian borders. In this gently slumbering corner
								of the country, the cuisine is spectacular, the pace of life unhurried and crowds
								are rare. In other words, conditions are perfect for a slow road trip by motorcycle.
								Spare yourself the drive out of Bangkok by taking a bus or train to Nakhon
								Ratchasima (Khorat) and pick up some wheels there.
							</Paragraph>

							<Paragraph>
								Hit the trail and meander east through Phanom Rung Historical Park, a striking Khmer
								temple complex atop an extinct volcano. Track the Cambodian border eastward to reach
								Ubon Ratchathani, an off-the-tourist-track town studded with handsome monasteries
								and balanced beside the Mae Nam Mun river. Loop through Yasothon (worth a stop
								during the rocket festival in mid-May) and lake-centered Roi Et to reach Prasat Puay
								Noi, a fine Khmer Hindu temple complex from the 12th century. Keep the Khmer theme
								going at Phimai, a grand temple ruin that fuses Hindu and Buddhist motifs, then
								close the loop back in Nakhon Ratchasima, grazing on Isan delicacies at RN Yard.
							</Paragraph>

							<Paragraph>
								<Span>Planning tip:</Span> A big part of traveling in Isan is sampling the food.
								Essential Isan dishes to try include larb (a zesty ground meal salad with lime,
								mint, chili and toasted rice), som tam (a pounded salad of green papaya, green
								beans, peanuts and shrimp) and sai krok isan (a sour, smoky, fermented pork
								sausage).
							</Paragraph>
						</TextContainer>

						<TextContainer className="mt-24" title="4. Hua Hin to Surat Thani">
							<PlaceDescription
								title="Best road trip for low-key beaches"
								place="Hua Hin–Surat Thani; 580km (360 miles) one way; 3 to 4 days"
							/>

							<Paragraph>
								Southern Thailand’s long, slender profile doesn’t lend itself to looping road trips,
								but there’s plenty to see here by sticking to the coast. Start in Hua Hin,
								Thailand’s original beach resort, where one-way car rentals can be arranged through
								Thai Rent a Car. Slide south through the low-key, locals-oriented beach towns of
								Prachaup Khiri Khan, Ban Krut and Bang Saphan Yai to Chumphon, where the Muslim
								culture of southern Thailand will start to be visible. Before ending the trip at
								Surat Thani, duck inland to Khao Sok National Park, one of the world’s oldest
								rainforests, one that provides shelter for bears, tapirs, gibbons, elephants and
								tigers, myriad birds and the enormous Rafflesia kerrii (the world’s largest flower).
								The fun doesn’t have to stop at Surat Thani: the town is a jumping-off point for the
								Gulf Islands of Ko Samui, Ko Pha-Ngan and Ko Tao, where you can bask, party and
								enjoy some of the world’s best-priced scuba diving.
							</Paragraph>
						</TextContainer>

						<ArticleCover
							src="https://lp-cms-production.imgix.net/2024-10/shutterstock2066328449.jpg?fit=crop&w=2048&auto=format&q=75"
							text="When driving in Thailand’s far south you’ll never be far from the beach. Shutterstock"
						/>

						<TextContainer title="5. Phuket to Satun and back">
							<PlaceDescription
								title="Best road trip for island adventures"
								place="Phuket–Satun–Phuket; 1100km (690 miles) round trip; one week"
							/>

							<Paragraph>
								Because of political unrest in Thailand’s far south, the Andaman Coast is best
								explored as an out-and-back road trip starting from Phuket, avoiding the troubled
								east coast. With hundreds of idyllic islands offshore, you’ll want to stop regularly
								for overnight sojourns on tropical islands along the way.
							</Paragraph>

							<Paragraph>
								Starting with a seafood feast in Phuket, follow the Andaman Coast around Phang-Nga
								Bay, stopping for a boat trip around the otherworldly karst islands of Ao Phang-Nga
								Marine National Park. Keep following the bay south to Krabi and the epic
								rock-climbing cliffs around Railay, one of the world’s most enjoyable
								adventure-sports hubs.
							</Paragraph>

							<Paragraph>
								Hug the south to Ko Lanta to enjoy more time on the sand, then return to the
								mainland to reach Trang, gateway to its own collection of idyllic karst islands. (Do
								we see a pattern here?) The final leg south passes through townships that feel
								almost Malaysian in character. Turn around at Satun and take a couple of days to
								snorkel and hike on the unspoiled islands of Ko Tarutao Marine National Park before
								you retrace your steps to Phuket.
							</Paragraph>

							<Paragraph>
								<Span>Planning tip:</Span> Since the seas off the Andaman Coast can get very choppy
								from May to October and many ferry routes and some national parks close for the
								season, it’s best to avoid this time of year.
							</Paragraph>
						</TextContainer>

						<ArticleCover
							src="https://lp-cms-production.imgix.net/2024-10/shutterstock540505138.jpg?fit=crop&w=2048&auto=format&q=75"
							text="After tackling the Mae Hong Son Loop’s 1864 curves, you can get a souvenir certificate of completion in the town. Watcharaphan Kanthasap/Shutterstock"
						/>

						<TextContainer title="6. Mae Hong Son Loop">
							<PlaceDescription
								title="Best road trip for traveler vibes"
								place="Chiang Mai–Chiang Mai; 604km (375 miles); 4 days"
							/>

							<Paragraph>
								A more ambitious road trip from Chiang Mai meanders through the green hills to the
								southwest, following Routes 108 and 1095 through the lively traveler town of Mae
								Hong Son. This twisting loop is famous for having 1864 curves; the Chamber of
								Commerce in Mae Hong Son even issues souvenir certificates for drivers who complete
								the circuit. On the way, you can swing into some of the most interesting townships
								in northwest Thailand.
							</Paragraph>

							<Paragraph>
								Leaving Chiang Mai on the 108, the first stop is Doi Inthanon National Park, a lush,
								green mountaintop that’s one of the few places in Thailand where temperatures can
								dip below freezing. You’ll want to pause for a day or two at Mae Sariang, a relaxing
								riverside town that’s a great base for hiking and sustainable adventures in the
								hills.
							</Paragraph>

							<Paragraph>
								There’s time for another stop at Khun Yuam to explore wartime history before you
								roll into Mae Hong Son, one of Northern Thailand’s best hubs for monastery-hopping
								and treks to hill-tribe villages. On the loop back to Chiang Mai on Route 1095, make
								stops at the Su Tong Pae bamboo bridge, the “Little Switzerland” of Pang Oung and
								the bustling traveler hub of Pai, where you can kick back for a while, enjoying
								everything from treks to yoga classes and cooking schools.
							</Paragraph>

							<Paragraph>
								<Span>Planning tip:</Span> Be ready for cold temperatures at Doi Inthanon National
								Park; chilly fog can swirl around the summit year-round, so bring a warm layer.
							</Paragraph>
						</TextContainer>

						<TextContainer className="mt-24" title="7. Chiang Rai to Phayao">
							<PlaceDescription
								title="Best road trip for dramatic vistas"
								place="Chiang Rai–Phayao; 250km (155 miles); 3 days"
							/>

							<Paragraph>
								Crammed with temples and cultural sites like Chiang Mai but with less of a
								backpacker vibe, Chiang Rai is Northern Thailand’s second great city. A stop at the
								“white wat” of Wat Rong Khun is almost obligatory – if only to view the pop culture
								murals showing such diverse subjects as the 9/11 attacks and Keanu Reeves in The
								Matrix.
							</Paragraph>

							<Paragraph>
								To reach the Lao border town of Chiang Khong, follow back roads through a region
								that was once notorious as the heart of the opium-growing Golden Triangle. Take your
								time drifting through villages tucked along forest-cloaked ridges, then stop for a
								day or two in Chiang Khong to soak up the Lao influences seeping in from Huay Xai,
								just across the Mekong River.
							</Paragraph>

							<Paragraph>
								Divert south on the 1020 and follow Routes 1093 and 1155 through dramatic emerald
								hills to epic viewpoints such as Pratu Siam and Phu Chi Fa. Pause to enjoy the hot
								waterfall at Nam Tok Phu Sang before you roll onward to finish up in leafy Phayao,
								an overlooked Northern Thai town with pretty wooden houses, wetland scenery and a
								lost-in-time mood that will give you a sense of what all of the region was like
								before the arrival of mass tourism.
							</Paragraph>

							<Paragraph>
								<Span>Planning tip:</Span> This route follows many back roads off the main highways;
								turnoffs are usually signposted; if not, ask at roadside cafes and gas stations.
							</Paragraph>
						</TextContainer>

						<ArticleCover
							src="https://lp-cms-production.imgix.net/2024-10/GettyRF1036064062.jpg?fit=crop&w=2048&auto=format&q=75"
							text="Take special care for rule-flouting motorcycles when on the road, and drive slowly for maximum safety. Alongkot Sumritjearapol/Getty Images"
						/>

						<TextContainer title="Tips for driving in Thailand">
							<Paragraph>
								Thailand officially drives on the left – though be wary of locals flouting the
								rules, particularly motorcycles, which often ride against the traffic flow on the
								hard shoulder. Always give way to larger vehicles such as buses and trucks, and
								watch out for pedestrians. Driving slowly is always sensible.
							</Paragraph>
							<Paragraph>
								You can rent cars, motorcycles and scooters with your own (presumably foreign)
								driver’s license. We recommend taking out as much insurance as is available and
								keeping your license and passport (or copies of the identity pages) handy for police
								checks.
							</Paragraph>
						</TextContainer>
					</article>
				</section>
			</div>
		</>
	);
};
