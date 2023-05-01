type PrintOptionsType = {
	printerURL?: string;
	isLandscape?: boolean;
	jobName?: string;
} & ({ html: string } | { filePath: string });

type SelectPrinterOptionsType = {
	x: number;
	y: number;
};

export function print(options: PrintOptionsType): Promise<any>;

export function selectPrinter(options: SelectPrinterOptionsType): Promise<any>;
