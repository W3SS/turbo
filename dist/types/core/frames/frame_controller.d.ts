import { FetchRequest, FetchRequestDelegate } from "../../http/fetch_request";
import { FetchResponse } from "../../http/fetch_response";
import { FormInterceptor, FormInterceptorDelegate } from "./form_interceptor";
import { FormSubmission, FormSubmissionDelegate } from "../drive/form_submission";
import { FrameElement } from "../../elements/frame_element";
import { LinkInterceptor, LinkInterceptorDelegate } from "./link_interceptor";
import { Locatable } from "../location";
export declare class FrameController implements FetchRequestDelegate, FormInterceptorDelegate, FormSubmissionDelegate, LinkInterceptorDelegate {
    readonly element: FrameElement;
    readonly linkInterceptor: LinkInterceptor;
    readonly formInterceptor: FormInterceptor;
    formSubmission?: FormSubmission;
    private resolveVisitPromise;
    constructor(element: FrameElement);
    connect(): void;
    disconnect(): void;
    shouldInterceptLinkClick(element: Element, url: string): boolean;
    linkClickIntercepted(element: Element, url: string): void;
    shouldInterceptFormSubmission(element: HTMLFormElement, submitter?: HTMLElement): boolean;
    formSubmissionIntercepted(element: HTMLFormElement, submitter?: HTMLElement): void;
    visit(url: Locatable): Promise<void>;
    additionalHeadersForRequest(request: FetchRequest): {
        "Turbo-Frame": string;
    };
    requestStarted(request: FetchRequest): void;
    requestPreventedHandlingResponse(request: FetchRequest, response: FetchResponse): void;
    requestSucceededWithResponse(request: FetchRequest, response: FetchResponse): Promise<void>;
    requestFailedWithResponse(request: FetchRequest, response: FetchResponse): void;
    requestErrored(request: FetchRequest, error: Error): void;
    requestFinished(request: FetchRequest): void;
    formSubmissionStarted(formSubmission: FormSubmission): void;
    formSubmissionSucceededWithResponse(formSubmission: FormSubmission, response: FetchResponse): void;
    formSubmissionFailedWithResponse(formSubmission: FormSubmission, fetchResponse: FetchResponse): void;
    formSubmissionErrored(formSubmission: FormSubmission, error: Error): void;
    formSubmissionFinished(formSubmission: FormSubmission): void;
    private findFrameElement;
    private loadResponse;
    private extractForeignFrameElement;
    private loadFrameElement;
    private focusFirstAutofocusableElement;
    private scrollFrameIntoView;
    private referencesFrame;
    get firstAutofocusableElement(): HTMLElement | null;
    get id(): string;
    get enabled(): boolean;
}
