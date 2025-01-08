import "@styles/index.scss";
import s from "./layout.module.scss";
import { Metadata } from "next";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export type LayoutProps = {
	children: React.ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
	return (
		<>
			<html lang='en'>
				<body id='root'>
					<main className={s.main}>{children}</main>
				</body>
			</html>
		</>
	);
}

export async function generateMetadata() {
	const title = "Bebe Digtial";
	const description = "Bebe Digtial is a digital agency based in Lagos, Nigeria.";

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		title: {
			template: `Bebe Digtial — %s`,
			default: "Bebe Digtial",
		},
		description,
		//image: globalSeo?.fallbackSeo?.image?.url,
		openGraph: {
			title,
			description,
			url: process.env.NEXT_PUBLIC_SITE_URL,
			siteName: title,
			/*images: [
				{
					url: `${globalSeo?.fallbackSeo?.image?.url}?w=1200&h=630&fit=fill&q=80`,
					width: 800,
					height: 600,
					alt: globalSeo?.siteName,
				},
				{
					url: `${globalSeo?.fallbackSeo?.image?.url}?w=1600&h=800&fit=fill&q=80`,
					width: 1600,
					height: 800,
					alt: globalSeo?.siteName,
				},
				{
					url: `${globalSeo?.fallbackSeo?.image?.url}?w=790&h=627&fit=crop&q=80`,
					width: 790,
					height: 627,
					alt: globalSeo?.siteName,
				},
			],
      */
			locale: "en_US",
			type: "website",
		},
	} as Metadata;
}
