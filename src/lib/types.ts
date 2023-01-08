export type ReturnedProps<Getter extends (...args: never) => unknown> = Awaited<
	ReturnType<Getter>
> extends { props: infer Props }
	? Props
	: never;
