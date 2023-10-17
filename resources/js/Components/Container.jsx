export default function Container({ className = '', id = '', disabled, children, ...props }) {
    return (
        <div id={id} className={"container px-8 md:px-28 mx-auto  " + className}
        >
            {children}
        </div>
    );
}
