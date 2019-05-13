import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormatDatePipe } from "./pipe/format-date.pipe";

describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormatDatePipe
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to demo!');
  });

  // input box text cases
  it('should show input, output, + button, - button ', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('.input-date');
    // console.log('------input----', input, '-----', input.value);
    expect(input.value).toBe('');

    //check output
    const output = compiled.querySelector('.output-date');
    // console.log('------input----', output, '-----', output.innerHTML);
    expect(output.innerHTML).toBe('');

    // increment button 
    const incrementB = compiled.querySelector('.increment-date');
    expect(incrementB.innerHTML).toBe('+');

    // decrement button 
    const decrementB = compiled.querySelector('.decrement-date');
    expect(decrementB.innerHTML).toBe('-');
  });


  it('should show INPUT with Value, with increment, with decrement', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('.input-date');

    input.value = "2018-10-24";
    // console.log('------input---222-', input, '-----', input.value);

    expect(input.value).toBe('2018-10-24');
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const output = compiled.querySelector('.output-date');
    expect(output.innerHTML).toBe('Wed, 24th Oct 2018');

    // click on increment button
    compiled.querySelector('.increment-date').click();
    fixture.detectChanges();

    expect(output.innerHTML).toBe('Thu, 25th Oct 2018');

    // click on decrement button
    compiled.querySelector('.decrement-date').click();
    fixture.detectChanges();

    expect(output.innerHTML).toBe('Wed, 24th Oct 2018');
  });

});
