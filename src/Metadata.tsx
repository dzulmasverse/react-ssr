import Logo from './assets/logo.png'

interface Props {
    title: string,
    description?: string;
    favicon?: string;
}

const Metadata = ({ title, description, favicon }: Props) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="shortcut icon" href={favicon ?? Logo} type="image/x-icon" />

            <meta property="og:title" content={title} />
        </>
    );
};

export default Metadata;