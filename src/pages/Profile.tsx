import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Briefcase, MapPin, Save, FileText, Video, Trophy } from "lucide-react";

const Profile = () => {
  const stats = [
    { label: "CVs analysés", value: "4", icon: FileText, color: "text-primary" },
    { label: "Questions pratiquées", value: "12", icon: Video, color: "text-warning" },
    { label: "Score moyen", value: "64/100", icon: Trophy, color: "text-success" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Mon profil
          </h1>
          <p className="text-muted-foreground">
            Gérez vos informations et consultez vos statistiques
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Profile Information */}
        <Card className="p-8 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="flex items-start gap-6 mb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Jean Dupont
              </h2>
              <p className="text-muted-foreground mb-4">
                Membre depuis janvier 2024
              </p>
              <Button variant="outline" size="sm">
                Changer la photo
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="firstName" 
                    placeholder="Jean" 
                    defaultValue="Jean"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="lastName" 
                    placeholder="Dupont" 
                    defaultValue="Dupont"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email"
                  placeholder="jean.dupont@email.com" 
                  defaultValue="jean.dupont@email.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="job">Poste actuel</Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="job" 
                  placeholder="Chef de projet" 
                  defaultValue="Chef de projet"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Localisation</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="location" 
                  placeholder="Paris, France" 
                  defaultValue="Paris, France"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
            <Button variant="outline">
              Annuler
            </Button>
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              Enregistrer les modifications
            </Button>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-critical/20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Zone de danger
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Actions irréversibles sur votre compte
          </p>
          <div className="flex gap-3">
            <Button variant="outline" className="text-critical border-critical/20 hover:bg-critical/10 hover:text-critical">
              Supprimer mon compte
            </Button>
            <Button variant="outline">
              Exporter mes données
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
