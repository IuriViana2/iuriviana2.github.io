#include<stdio.h>
#include<stdlib.h>
#include<windows.h>
#include<string.h>
#include<conio.h>
#include<locale.h>

int main(){
	system("cls");
	setlocale(LC_CTYPE, "Portuguese");
	char in[10] = "iniciar" , In[10], set[10] = "setar";
	int h =0, min = 0, s =0, op,i;

		printf("Cronômetro:");
	
	printf("\n\n\n\t\t\t%d0hrs:%d0min:%d0s", h, min, s);
	
	printf("\n\n\n\nEscreva \"Iniciar\" para iniciar o conômetro\nou \"Setar\" para setar um tempo no cronômetro: ");
	scanf("%s", In);
	
	
	
	
	if(strcmp(in,strlwr(In)) ==0){
		system("cls");
		
			for(s=0;s>=0;s++){
		
				system("cls");
					printf("Cronômetro:");
					
				if(h<10&& min<10 && s<10){
					printf("\n\n\n\t\t\t0%dhrs:0%dmin:0%ds", h, min, s);
				}
				else if(h<10 && min<10){
					printf("\n\n\n\t\t\t0%dhrs:0%dmin:%ds", h, min, s);
				}
				else if(h<10){
					printf("\n\n\n\t\t\t0%dhrs:%dmin:%ds", h, min, s);
				}
				else{
					printf("\n\n\n\t\t\t0%dhrs:0%dmin:0%ds", h, min, s);
				}
							
					
				if(s==60){
					min++;
					s=0;
				}
				if(min==60){
					h++;
					min=0;
				}
				if(h==24){
					h=0;
				}

				
				Sleep(1000);
			}
			
	
	}
	else if(strcmp(set,strlwr(In))==0){
		system("cls");
		printf("Entre com o valor das horas: ");
		scanf("%d", &h);
		printf("Entre com o valor dos minutos: ");
		scanf("%d", &min);
		printf("Entre com o valor dos segundos: ");
		scanf("%d", &s);
		
		for(i=0;i==0;s--){
			system("cls");
		
	
		
			
			 if(min<10&&s<10&& h<10){
					printf("\n\n\n\t\t\t0%dhrs:0%dmin:0%ds", h, min, s);
			}
			else if(h <10 && min<10){
					printf("\n\n\n\t\t\t0%dhrs:0%dmin:%ds", h, min, s);
			}
			else if(min <10 && s<10){
					printf("\n\n\n\t\t\t%dhrs:%dmin:%ds", h, min, s);
			}
		else if(s<10){
					printf("\n\n\n\t\t\t%dhrs:%dmin:0%ds", h, min, s);
				}
			else if(min<10){
					printf("\n\n\n\t\t\t%dhrs:0%dmin:%ds", h, min, s);
			}
			else if(h<10){
					printf("\n\n\n\t\t\t0%dhrs:%dmin:%ds", h, min, s);
			}
			else{
					printf("\n\n\n\t\t\t%dhrs:%dmin:%ds", h, min, s);
			}
		
		
		
		if(s==0&&min==0){
			Beep(523,500);
			Sleep(1000);
			printf("\a\a\nTempo acabou!");
			Sleep(1000);
			break;
		}
		
		if(s==0){
			min--;
			s= 60;
		}
		if(min==0 && h!= 0){
			h--;
			min=60;
		}
	
		
		
		Sleep(1000);
		}
	}
	else{
	printf("Inválido!\n\n");
	system("PAUSE");
	return main();	
	}
	
	
	
	
	
	
	
	return 0;
}

