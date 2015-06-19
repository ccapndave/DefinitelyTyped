declare module "cycle-react" {
	interface ComponentOptions {
		rootTagName?: string
		mixins?: any[]
		propTypes?: any[]
		disableHotLoader?: boolean
		bindThis?: boolean
	}
	
	interface Interactions {
		get: (selector: string, eventName: string, isSingle?: boolean) => Rx.Observable<Event>
	}
	
	interface DefinitionFn<P> {
		(interactions: Interactions, props$: Rx.Observable<P>): Rx.Observable<React.Component<P, {}>>
	}
	
	export function applyToDOM(container: string | Element, computer: any): any;
	
	export function component<P>(displayName: string, definitionFn: DefinitionFn<P>, options?: ComponentOptions): React.Component<P, {}>;
	
	export function h<P>(selector: any, props: P, text?: string | number): any;
	export function h<P>(selector: any, props: P, children?: any[]): any;
}