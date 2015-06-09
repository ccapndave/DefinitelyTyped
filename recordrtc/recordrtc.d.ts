/*declare function RecordRTC(mediaStream: any): RecordRTC;

interface RecordRTC {
	startRecording(): void;
	pauseRecording(): void;
	resumeRecording(): void;
	stopRecording(cb: (url: string) => void): void;
	getBlob(): Blob;
	getDataURL(cb: (url: string) => void): void;
	toURL(): string;
}*/

interface RecordRTCStatic {
	(mediaStream: any): RecordRTC;
}

interface RecordRTC {
	startRecording(): void;
	pauseRecording(): void;
	resumeRecording(): void;
	stopRecording(cb: (url: string) => void): void;
	getBlob(): Blob;
	getDataURL(cb: (url: string) => void): void;
	toURL(): string;
}

declare module "recordrtc" {
	var r: RecordRTCStatic;
	export = r;
}