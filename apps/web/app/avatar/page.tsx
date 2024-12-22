const DivNode: React.FC<React.ComponentPropsWithRef<"div">> = (props) => {
  return <div {...props} />;
};

const pkmer = {
  div: DivNode,
};

function Root(props: { children: React.ReactNode }) {
  return <pkmer.div {...props} />;
}

export default function Page() {
  return (
    <Root>
      <p>hello world</p>
      <span>Love React</span>
    </Root>
  );
}
