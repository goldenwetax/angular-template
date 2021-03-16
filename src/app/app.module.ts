import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { httpInterceptorProviders } from './services';
import { IconModule } from '@ant-design/icons-angular';
import { LoadingBarModule, LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { NgxEchartsModule } from 'ngx-echarts';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './services/http';
import { SharedModule } from './shared';

registerLocaleData(zh);

export function HttpLoaderFactory(http) {

  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconModule,
    CoreModule.forRoot(),
    ReactiveFormsModule,
    // NgZorroAntdModule.forRoot(),
    // NgZorroAntdModule,
    SharedModule,
    AppRoutingModule,
    // NgxEchartsModule,
    // loading-bar
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    httpInterceptorProviders,
    // {
    //   provide: NZ_I18N,
    //   useValue: zh_CN
    // },
    // { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
