import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {LoginSignupService, Token} from 'src/app/services/login-signup.service';
// import {SecureStorageService} from '../../../services/secure-storage.service';
// import {ToastrService} from 'ngx-toastr';
// import {ActivatedRoute, Router} from '@angular/router';
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import {MessageService} from 'src/app/services/message.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    // focus !: boolean;
    // focus2 !: boolean;
    // formGroup !: FormGroup;
    // resetPasswordForm !: FormGroup;
    // closeResult !: string;

    // constructor(private loginSignupService: LoginSignupService, private secureStorageService: SecureStorageService,
    //             private toastrService: ToastrService, private activeRoute: ActivatedRoute,
    //             public modalService: NgbModal, private router: Router,
    //             private messageService: MessageService) {
    //}

    ngOnInit(): void {
        // this.messageService.sendMessage('signin');
        // this.formGroup = new FormGroup({
        //     username: new FormControl('', [Validators.required]), password: new FormControl('', [Validators.required])
        // });
        // this.resetPasswordForm = new FormGroup({
        //     username: new FormControl('', [Validators.required])
        // });
        // const access = localStorage.getItem('access');
        // this.activeRoute.queryParams.subscribe((params) => {
        //     if (access !== null && params.token !== null && params.token !== undefined) {
        //         this.loginSignupService.activateAccount(this.secureStorageService.getToken(access), params.token)
        //             .then(() => {
        //                 setTimeout(() => {
        //                     this.toastrService.success('your account has been activated you can log in', '', {
        //                         timeOut: 8000,
        //                         enableHtml: true,
        //                         closeButton: true,
        //                         toastClass: 'alert custom-color-alert alert-with-icon',
        //                         positionClass: 'toast-top-right',
        //                     });
        //                 }, 3000);
        //             });
        //     }
        // });
    }

    ngOnDestroy(): void {
        // this.messageService.sendMessage('signinDestroy');
    }

    submit(event: Event): void {
        // event.preventDefault();
        // this.loginSignupService.login(this.formGroup.value.username, this.formGroup.value.password).then((response: Token) => {
        //     localStorage.setItem('full_name', response.full_name);
        //     localStorage.setItem('userId', String(response.userId));
        //     localStorage.setItem('access', this.secureStorageService.setToken(response.access));
        //     setTimeout(() => {
        //         this.toastrService.success('you\'re successfully logged in ', '', {
        //             timeOut: 8000,
        //             enableHtml: true,
        //             closeButton: true,
        //             toastClass: 'alert custom-color-alert alert-with-icon',
        //         });
        //     }, 2000);
        // }).catch((error) => {
        //     if (error.status) {
        //         setTimeout(() => {
        //             this.toastrService.error(error.error.message, '', {
        //                 timeOut: 8000,
        //                 enableHtml: true,
        //                 closeButton: true,
        //                 toastClass: 'alert alert-danger alert-with-icon',
        //                 positionClass: 'toast-top-right'
        //             });
        //         }, 2000);
        //     }
        // });
    }

    // open(content: TemplateRef<HTMLElement>): void {
    //     this.modalService.open(content, {size: 'md', centered: true}).result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    //     //     this.modalService.open(content).result.then((result) => {
    //     //         this.closeResult = `Closed with: ${result}`;
    //     //     }, (reason) => {
    //     //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     // });
    // }
    //
    // public getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return `with: ${reason}`;
    //     }
    // }
    //
    // public sendResetPasswordEmail(event: Event): void {
    //     event.preventDefault();
    //     this.loginSignupService.resetPasswordPart1(this.resetPasswordForm.value.username).then((response) => {
    //         localStorage.setItem('access', this.secureStorageService.setToken(response.access));
    //         // this.router.navigate(['/public/forgot_password']);
    //     });
    // }
}
